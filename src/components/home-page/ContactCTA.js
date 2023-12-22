import React from 'react';

export const ContactCTA = () => {
    return (
        <div className="bg-gray-900">
            <div className="flex mx-auto max-w-7xl px-6 py-16 sm:py-24 justify-between lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Need to Transport Your Vehicle?
                    <br />
                    Get in Touch for a Reliable Service.
                </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <a
                        href="/contact"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}
