import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Safe
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Multi-Signature Security
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Enterprise-grade asset custody with multi-signature protection.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Multi-Sig Wallets</h2>
          <p className="text-lg text-gray-400">Require multiple approvals for transactions. Perfect for teams and DAOs.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hardware Support</h2>
          <p className="text-lg text-gray-400">Connect hardware wallets like Ledger and Trezor for additional security.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Spending Limits</h2>
          <p className="text-lg text-gray-400">Set daily limits and approval thresholds to prevent unauthorized transfers.</p>
        </div>
      </section>

    </main>
  )
}
