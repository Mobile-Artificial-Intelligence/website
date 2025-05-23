"use client"; // required for onClick in app directory
import "./try-maid-button.css";

export default function TryMaidButton() {
    return (
        <button id="try-maid-button" onClick={() => window.location.href = "https://maid-app.com"} >
          Try Maid Online Now
        </button>
    );
}