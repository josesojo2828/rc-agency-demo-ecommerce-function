import { useState } from "react";
import { User, Heart, Settings, Package, BarChart2, LogOut, Camera } from "lucide-react";
import { ProductCard } from "../components/ui/ProductCard";
import { useStore } from "../context/StoreContext";

export function Profile() {
    const [activeTab, setActiveTab] = useState("overview");
    const { wishlist } = useStore();

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Refined Profile Header */}
            <div className="bg-linear-to-r from-base-200 to-base-100 rounded-box p-8 mb-8 shadow-xs border border-base-200">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative group">
                        <div className="avatar placeholder">
                            <div className="bg-primary text-primary-content rounded-full w-24 text-3xl font-bold ring-4 ring-base-100 shadow-xl">
                                JD
                            </div>
                        </div>
                        <button className="btn btn-circle btn-xs btn-primary absolute bottom-0 right-0 shadow-lg">
                            <Camera className="w-3 h-3" />
                        </button>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold">John Doe</h1>
                        <p className="opacity-60">john.doe@example.com</p>
                        <div className="flex gap-2 mt-3 justify-center md:justify-start">
                            <span className="badge badge-primary badge-outline">Gold Member</span>
                            <span className="badge badge-secondary badge-outline">{wishlist.length} Wishlist Items</span>
                        </div>
                    </div>
                    <div className="md:ml-auto flex gap-3">
                        <button className="btn btn-ghost text-error btn-sm"><LogOut className="w-4 h-4 mr-2" /> Logout</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Refined Sidebar Navigation */}
                <div className="w-full md:w-64 shrink-0">
                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body p-2">
                            <ul className="menu w-full rounded-box gap-1">
                                <li><a className={activeTab === "overview" ? "active font-bold" : ""} onClick={() => setActiveTab("overview")}><BarChart2 className="w-4 h-4" /> Overview</a></li>
                                <li><a className={activeTab === "orders" ? "active font-bold" : ""} onClick={() => setActiveTab("orders")}><Package className="w-4 h-4" /> My Orders</a></li>
                                <li><a className={activeTab === "wishlist" ? "active font-bold" : ""} onClick={() => setActiveTab("wishlist")}><Heart className="w-4 h-4" /> Wishlist <span className="badge badge-sm badge-ghost ml-auto">{wishlist.length}</span></a></li>
                                <li><a className={activeTab === "settings" ? "active font-bold" : ""} onClick={() => setActiveTab("settings")}><Settings className="w-4 h-4" /> Settings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="grow">

                    {activeTab === "overview" && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="stat bg-base-100 shadow-sm border border-base-200 rounded-box">
                                    <div className="stat-figure text-primary">
                                        <Package className="w-8 h-8 opacity-20" />
                                    </div>
                                    <div className="stat-title">Total Orders</div>
                                    <div className="stat-value text-primary">12</div>
                                    <div className="stat-desc">2 pending delivery</div>
                                </div>
                                <div className="stat bg-base-100 shadow-sm border border-base-200 rounded-box">
                                    <div className="stat-figure text-secondary">
                                        <Heart className="w-8 h-8 opacity-20" />
                                    </div>
                                    <div className="stat-title">Wishlist</div>
                                    <div className="stat-value text-secondary">{wishlist.length}</div>
                                    <div className="stat-desc">Items saved</div>
                                </div>
                                <div className="stat bg-base-100 shadow-sm border border-base-200 rounded-box">
                                    <div className="stat-figure text-accent">
                                        <User className="w-8 h-8 opacity-20" />
                                    </div>
                                    <div className="stat-title">Member Level</div>
                                    <div className="stat-value text-accent">Gold</div>
                                    <div className="stat-desc text-success">Top 5% of customers</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "wishlist" && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">My Wishlist</h2>
                                <span className="opacity-60">{wishlist.length} Items</span>
                            </div>
                            {wishlist.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {wishlist.map((item) => (
                                        <ProductCard key={item.id} {...item} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-base-100 rounded-box border border-base-200">
                                    <Heart className="w-16 h-16 mx-auto mb-4 text-base-300" />
                                    <h3 className="text-xl font-bold mb-2">Your wishlist is empty</h3>
                                    <p className="opacity-60">Go explore our products to find what you love.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "settings" && (
                        <div className="card bg-base-100 shadow-sm border border-base-200">
                            <div className="card-body">
                                <h2 className="card-title mb-6">Account Settings</h2>

                                <div className="grid gap-6 max-w-xl">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Display Name</span>
                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered" defaultValue="John Doe" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label cursor-pointer justify-between p-4 border border-base-200 rounded-lg hover:bg-base-200 transition-colors">
                                            <span className="label-text font-bold">Email Notifications</span>
                                            <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label cursor-pointer justify-between p-4 border border-base-200 rounded-lg hover:bg-base-200 transition-colors">
                                            <span className="label-text font-bold">Dark Mode</span>
                                            <input type="checkbox" className="toggle" />
                                        </label>
                                    </div>

                                    <div className="mt-4">
                                        <button className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "orders" && (
                        <div className="card bg-base-100 shadow-sm border border-base-200">
                            <div className="card-body p-0 sm:p-6">
                                <h2 className="card-title mb-4 px-6 pt-6 sm:px-0 sm:pt-0">Order History</h2>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover">
                                                <th>#12345</th>
                                                <td>Oct 24, 2023</td>
                                                <td><span className="badge badge-success badge-soft">Delivered</span></td>
                                                <td>$230.50</td>
                                                <td><button className="btn btn-xs btn-outline">View</button></td>
                                            </tr>
                                            <tr className="hover">
                                                <th>#12346</th>
                                                <td>Nov 02, 2023</td>
                                                <td><span className="badge badge-warning badge-soft">Processing</span></td>
                                                <td>$45.00</td>
                                                <td><button className="btn btn-xs btn-outline">View</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
