export default function StatusFlowGuide() {
    return (
        <div className="bg-white p-4 m-4 rounded-2xl shadow-md">
            <h1>Status Flow Guide</h1>
            <ol>
                <li>Checked In</li>
                <li>Pre-Procedure</li>
                <li>In Process</li>
                <li>Closing</li>
                <li>Recovery</li>
                <li>Complete</li>
                <li>Dismissal</li>
            </ol>
            <p>Rules: Statuses cannot be skipped. Can only move forwrad or back one step. No minimum time between updates </p>
            </div>
    );
}