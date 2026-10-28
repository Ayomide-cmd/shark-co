import { useState, type ChangeEvent, type FormEvent } from "react";
import type { MemberForm } from "../types";
const empty: MemberForm = { email: "", firstName: "", lastName: "", phone: "" };
const fields: { key: keyof MemberForm; label: string; type: string }[] = [
  { key: "email", label: "Email", type: "email" },
  { key: "firstName", label: "First name", type: "text" },
  { key: "lastName", label: "Last name", type: "text" },
  { key: "phone", label: "Phone number", type: "tel" },
];
export default function Membership() {
  const [form, setForm] = useState<MemberForm>(empty);
  const [done, setDone] = useState(false);
  const onChange = (k: keyof MemberForm) => (e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e: FormEvent) => { e.preventDefault(); /* TODO: POST form to your API or mailing list */ setDone(true); setForm(empty); };
  return (
    <section id="join" className="section section--blue join">
      <h2>Join the Frenzy</h2>
      <p>Get early access to drops, secret restocks, member-only pieces and the makers everyone is about to know.</p>
      {done ? <p className="join__ok" role="status">You're in. Check your inbox for your first drop.</p> : (
        <form onSubmit={onSubmit}>
          {fields.map(f => (
            <label key={f.key}>{f.label} *
              <input required type={f.type} value={form[f.key]} onChange={onChange(f.key)} />
            </label>
          ))}
          <button className="btn btn--orange" type="submit">Join the pack</button>
        </form>
      )}
    </section>
  );
}
