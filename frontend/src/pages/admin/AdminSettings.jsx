export default function AdminSettings() {
  return (
    <div className="bg-white p-6 rounded shadow max-w-xl">
      <h3 className="font-semibold mb-4">Platform Settings</h3>

      <input className="form-input" placeholder="Platform Name" />
      <input type="file" className="form-input" />
      <input className="form-input" placeholder="Contact Email" />
      <input className="form-input" placeholder="Contact Phone" />
      <textarea className="form-input" placeholder="Address"></textarea>

      <button className="btn-primary mt-3">Save Settings</button>
    </div>
  );
}
