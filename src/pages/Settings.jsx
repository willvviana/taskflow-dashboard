import { useState } from "react";
import { currentUser } from "../data/mockData.js";

export default function Settings() {
  const [form, setForm] = useState({
    name: currentUser.name,
    email: currentUser.email,
    password: "",
  });
  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend — simulate save.
    setSaved(true);
    setForm((f) => ({ ...f, password: "" }));
  }

  return (
    <div className="max-w-2xl space-y-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
        <h2 className="text-lg font-semibold text-slate-900">Profile</h2>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-indigo-500 grid place-items-center text-white text-lg font-bold">
            {currentUser.initials}
          </div>
          <div>
            <p className="font-medium text-slate-900">{currentUser.name}</p>
            <p className="text-sm text-slate-500">{currentUser.role}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-slate-700">Full name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">
            Password <span className="text-slate-400 font-normal">(leave blank to keep current)</span>
          </span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors"
          >
            Save changes
          </button>
          {saved && <span className="text-sm text-emerald-600">Saved.</span>}
        </div>
      </form>

      <div className="bg-white rounded-xl border border-rose-200 p-6">
        <h3 className="font-semibold text-rose-700 mb-1">Danger zone</h3>
        <p className="text-sm text-slate-600 mb-4">
          Deleting your account is permanent. This action cannot be undone.
        </p>
        <button className="px-4 py-2 rounded-lg border border-rose-300 text-rose-600 hover:bg-rose-50 text-sm font-medium">
          Delete account
        </button>
      </div>
    </div>
  );
}