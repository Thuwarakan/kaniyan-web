
import React from 'react';
import '../styles/RoomList.css';

const RoomList = () => {
    return (
        <div className="room-list-section">
            <h3 className="availability-title">Availability</h3>
            <table className="room-table">
                <thead>
                    <tr>
                        <th className="th-type">Room Type</th>
                        <th className="th-sleeps">Sleeps</th>
                        <th className="th-price">Price (1 night)</th>
                        <th className="th-select">Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td-type">
                            <div className="room-name">Standard Double Room</div>
                            <div className="room-bed">1 double bed</div>
                            <span className="room-feature">✔ Free WiFi</span>
                        </td>
                        <td className="td-sleeps">👤👤</td>
                        <td className="td-price">
                            <div className="price-val">₹ 12,500</div>
                            <div className="tax-val">+ taxes</div>
                        </td>
                        <td className="td-select">
                            <select className="room-select">
                                <option value="0">0</option>
                                <option value="1">1 (₹ 12,500)</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-type">
                            <div className="room-name">Deluxe Suite with Sea View</div>
                            <div className="room-bed">1 extra-large double bed</div>
                            <span className="room-feature">✔ Sea view</span>
                            <span className="room-feature">✔ Free WiFi</span>
                            <span className="room-feature">✔ Breakfast included</span>
                        </td>
                        <td className="td-sleeps">👤👤</td>
                        <td className="td-price">
                            <div className="price-val">₹ 18,000</div>
                            <div className="tax-val">+ taxes</div>
                        </td>
                        <td className="td-select">
                            <select className="room-select">
                                <option value="0">0</option>
                                <option value="1">1 (₹ 18,000)</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="table-footer">
                            <button className="reserve-table-btn">I'll Reserve</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default RoomList;
