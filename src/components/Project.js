import React from "react";

function Project(props) {
    return (
        <div className="project-group">
            {props.projects.map(item => (
                <div id={item.name} key={item.name} className="m-2">

                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-start-2 col-span-4">
                            <div>
                                <div className="group bg-gray-800 p-4 transition-all duration-300 hover:rotate-1 lg:p-8">
                                    <div className="mb-3 text-right">
                                        <button
                                            className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="h-6 w-6">
                                                <path
                                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <img className="aspect-[2/2] w-16" src={item.image} alt={item.description} />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-50">{item.name}</h3>
                                            <span className="text-xs text-gray-300">{item.description}</span>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h3 className="text-2xl font-medium text-gray-200">{item.description}</h3>
                                        <div className="text-sm font-medium">
                                            <span className="m-1 ml-0 inline-block text-blue-500">{item.technologies[0]}</span>
                                            <span className="m-1 ml-0 inline-block text-yellow-500">{item.technologies[1]}</span>
                                            <span className="m-1 ml-0 inline-block text-pink-500">{item.technologies[2]}</span>
                                            <span className="m-1 ml-0 inline-block text-lime-500">{item.technologies[3]}</span>
                                            <span className="m-1 ml-0 inline-block text-blue-500">{item.technologies[4]}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-50">{item.stack}</span>
                                        <a href={item.github}
                                            className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80"
                                            target="_blank" rel="noreferrer">
                                            Repo</a>

                                        <a href={item.deployed}
                                            className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80"
                                            target="_blank" rel="noreferrer">Check
                                            it Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))
            }
        </div >
    );
}

export default Project;


