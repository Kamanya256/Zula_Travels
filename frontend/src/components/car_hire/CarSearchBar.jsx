import { Calendar, MapPin } from "lucide-react";

export default function CarSearchBar({ onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        onSearch({
            start_date: form.get("start_date"),
            end_date: form.get("end_date"),
            pricing_type: form.get("pricing_type"),
            destination_id: form.get("destination_id"),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-md -mt-16 relative z-20"
        >
            <div>
                <label className="text-xs font-bold uppercase">Pickup Location</label>
                <div className="flex items-center gap-2 border p-3">
                    <MapPin size={16} />
                    <select name="destination_id" className="w-full outline-none">
                        <option value="1">Kampala</option>
                        <option value="2">Entebbe</option>
                        <option value="3">Jinja</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="text-xs font-bold uppercase">Pickup Date</label>
                <div className="flex items-center gap-2 border p-3">
                    <Calendar size={16} />
                    <input type="date" name="start_date" className="w-full outline-none" />
                </div>
            </div>

            <div>
                <label className="text-xs font-bold uppercase">Return Date</label>
                <div className="flex items-center gap-2 border p-3">
                    <Calendar size={16} />
                    <input type="date" name="end_date" className="w-full outline-none" />
                </div>
            </div>

            <div>
                <label className="text-xs font-bold uppercase">Hire Type</label>
                <select
                    name="pricing_type"
                    className="border p-3 w-full font-bold"
                >
                    <option value="dry">Dry (Self Drive)</option>
                    <option value="wet">Wet (Driver + Fuel)</option>
                </select>
            </div>

            <button className="md:col-span-4 bg-green-600 text-white py-4 font-bold uppercase tracking-widest hover:bg-black transition">
                Search Available Cars
            </button>
        </form>
    );
}
