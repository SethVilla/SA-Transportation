import React from 'react';

const jobOpenings = [
    {
        id: 1,
        role: 'Logistics Coordinator',
        href: '#',
        description:
            'Coordinate and manage the logistics of car transport across various states. Ensure timely and safe delivery while maintaining communication with drivers and clients.',
        salary: 'Competitive',
        location: 'Remote or On-Site',
    },
    {
        id: 2,
        role: 'Transportation Specialist',
        href: '#',
        description:
            'Responsible for planning and executing vehicle transport operations. Requires knowledge of transportation regulations and experience in route planning.',
        salary: 'Based on experience',
        location: 'Various Locations',
    },
    {
        id: 3,
        role: 'Customer Service Representative',
        href: '#',
        description:
            'Provide excellent customer service, addressing inquiries and concerns related to vehicle transport. Strong communication and problem-solving skills required.',
        salary: 'Competitive',
        location: 'Remote or On-Site',
    },
]

export const Services = () => {
    return (
        <div className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                    <div className="w-full lg:max-w-lg lg:flex-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Services
                        </h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            At SA Transports, we specialize in the safe and efficient transportation of vehicles across the country. Our expert team ensures your car's safe journey from start to finish.
                        </p>
                        <img
                            src="/servicio.jpg"
                            alt="SA Transports Service"
                            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                        />
                    </div>
                    <div className="w-full lg:max-w-xl lg:flex-auto">
                        <h3 className="sr-only">Job Openings at SA Transports</h3>
                        <ul className="-my-8 divide-y divide-gray-100">
                            {jobOpenings.map((opening) => (
                                <li key={opening.id} className="py-8">
                                    <dl className="relative flex flex-wrap gap-x-3">
                                        <dt className="sr-only">Role</dt>
                                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                                            <a href={opening.href}>
                                                {opening.role}
                                                <span className="absolute inset-0" aria-hidden="true" />
                                            </a>
                                        </dd>
                                        <dt className="sr-only">Description</dt>
                                        <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                                    </dl>
                                </li>
                            ))}
                        </ul>
                        {/* <div className="mt-8 flex border-t border-gray-100 pt-8">
                            <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                View all openings <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
