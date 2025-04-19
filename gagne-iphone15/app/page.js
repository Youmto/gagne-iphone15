'use client';
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  const [shares, setShares] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleShare = () => {
    window.open("https://wa.me/?text=🔥 Tente ta chance pour gagner un iPhone 15 Pro ici 👉 https://t.me/GRDPRONOSGC", "_blank");
    setShares(shares + 1);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      {step === 1 && (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-100 p-6 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold mb-4 text-center">🎉 Gagne un iPhone 15 Pro</h1>
          <p className="text-sm mb-6 text-center text-gray-600">Remplis ce formulaire pour participer au tirage au sort. Livraison gratuite si tu gagnes !</p>
          <input required type="text" placeholder="Nom complet" className="w-full mb-3 p-2 border rounded" />
          <input required type="email" placeholder="Adresse e-mail" className="w-full mb-3 p-2 border rounded" />
          <input required type="text" placeholder="Adresse de livraison" className="w-full mb-3 p-2 border rounded" />
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">Participer</button>
        </form>
      )}

      {step === 2 && (
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl text-center">
          <h2 className="text-xl font-semibold mb-2">✅ Formulaire envoyé !</h2>
          <p className="mb-4 text-sm text-gray-600">Pour valider ta participation, partage cette offre dans <strong>5 groupes WhatsApp</strong> minimum 👇</p>

          <button
            onClick={handleShare}
            className="w-full mb-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            📤 Partager maintenant
          </button>

          <p className="text-sm mb-2">Partages effectués : <strong>{shares}</strong></p>
          <div className="w-full bg-gray-200 h-4 rounded">
            <div
              className="bg-green-500 h-4 rounded transition-all duration-300"
              style={{ width: `${Math.min((shares / 5) * 100, 100)}%` }}
            />
          </div>

          {shares >= 5 ? (
            <p className="mt-4 text-green-600 font-semibold">🎉 Bravo ! Tu es officiellement en lice !</p>
          ) : (
            <p className="mt-4 text-red-500">⚠️ Il te reste {5 - shares} partages obligatoires</p>
          )}

          <p className="mt-6 text-xs text-gray-500">
            🔥 Conseil : plus tu partages, plus tu as de chances d’être en tête du classement !
          </p>
        </div>
      )}
    </main>
  );
}