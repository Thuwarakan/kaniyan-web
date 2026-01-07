
import React, { useEffect, useRef } from 'react';

const GlobeAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        });

        // Globe parameters
        const GLOBE_RADIUS = 200;
        const DOT_RADIUS = 2;
        const DOT_COUNT = 400;
        const ROTATION_SPEED = 0.002;
        const CONNECTION_DISTANCE = 50;

        // Generate points on a sphere
        const points = [];
        for (let i = 0; i < DOT_COUNT; i++) {
            // Golden angle spiral for even distribution
            const theta = Math.acos(-1 + (2 * i) / DOT_COUNT);
            const phi = Math.sqrt(DOT_COUNT * Math.PI) * theta;

            points.push({
                x: GLOBE_RADIUS * Math.sin(theta) * Math.cos(phi),
                y: GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi),
                z: GLOBE_RADIUS * Math.cos(theta)
            });
        }

        let angle = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            angle += ROTATION_SPEED;

            // Rotate and Project points
            const projectedPoints = points.map(p => {
                // Rotate around Y axis
                const rotatedX = p.x * Math.cos(angle) - p.z * Math.sin(angle);
                const rotatedZ = p.x * Math.sin(angle) + p.z * Math.cos(angle);

                // Simple perspective projection
                const scale = 400 / (400 - rotatedZ);
                const x2d = (rotatedX * scale) + centerX;
                const y2d = (p.y * scale) + centerY;

                return { x: x2d, y: y2d, z: rotatedZ, scale };
            });

            // Filter back-facing points roughly
            const visiblePoints = projectedPoints.filter(p => p.z < 100);

            // Draw connections
            ctx.strokeStyle = 'rgba(26, 115, 232, 0.15)'; // Google Blue low alpha
            ctx.lineWidth = 1;

            for (let i = 0; i < visiblePoints.length; i++) {
                for (let j = i + 1; j < visiblePoints.length; j++) {
                    const p1 = visiblePoints[i];
                    const p2 = visiblePoints[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw dots
            visiblePoints.forEach(p => {
                const alpha = (200 - p.z) / 200; // Fade out back points
                ctx.fillStyle = `rgba(26, 115, 232, ${Math.max(0, alpha)})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, DOT_RADIUS * p.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none' // Click-through
            }}
        />
    );
};

export default GlobeAnimation;
