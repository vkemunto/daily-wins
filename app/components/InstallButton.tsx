"use client";

import { useInstallPrompt } from "../hooks/useInstallPrompt";

export default function InstallButton() {
  const { canInstall, installApp, isInstalled } = useInstallPrompt();

  if (isInstalled) return null;
  if (!canInstall) return null;

  return (
    <button
      onClick={installApp}
      className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
    >
      📲 Install App
    </button>
  );
}