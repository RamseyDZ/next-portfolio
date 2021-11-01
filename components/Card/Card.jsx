import StackIcons from "../StackIcons/StackIcons";
import { Img } from "./CardStyle";

const  Card = (props) => {

    return (
        // <div className="m-6 sm:3 flex-auto flex-shrink-0 sm:w-20 text-2xl">
        // <div className="w-full  md:w-1/2 lg:w-1/3 px-10 md:px-4 mb-4  text-2xl">
        <div className="scene text-xl min-h-full px-1 w-full md:w-1/2 lg:my-4 my-2 lg:px-4 lg:w-1/3 ">
            <div className="card w-full shadow-md  rounded-xl dark:bg-gray700 hover:bg-gray-300 border hover:shadow-lg hover:shadow-inner-xl hover:cursor-pointer ">
                <div className="card-front w-full h-full pb-10 absolute  rounded-xl">
                    <div className="rounded-t-xl  max-h-48 overflow-hidden">
                        <Img 
                            className="block h-auto w-full"
                            src={
                                props.data.image
                            }/>
                    </div>
                    <div className="px-6 my-8">
                        <div className="flex items-center justify-between leading-tight pb-8">
                            <h1 className="text-xl font-bold">
                                <a className="no-underline hover:underline text-black text-2xl" href="#">
                                    { props.data.project }
                                </a>
                            </h1>
                            <p className="text-grey-darker text-md">
                                { props.data.year || "20/02/2021" }
                            </p>
                        </div>
                        
                        <div>
                            <StackIcons data={
                                props.data.stack
                            }/>
                        </div>
                    </div>
                </div>
                {/* To show after hovering on the card  */}
                <div className="card-back pb-4 w-full px-12 mb-2 mt-8 divide-y divide-gray-200">
                    <span className="text-gray-700 font-bold text-darken-4 mb-4">
                        { props.data.project }
                    </span>
                    <div className="pb-2">
                        <span className="status">
                            { props.data.status }
                        </span>
                    </div>
                    <div className="text-justify pb-2">
                        <p> { props.data.description } </p>
                        <p> <strong>Need:</strong> </p>
                        <p className="text-left"> { props.data.needs } </p>
                    </div>
                    <div className="py-2 justify-between ">
                        <span>
                            <a href={ props.data.website }>Demo</a>
                        </span>
                        <span>
                            <a className="github" href={ props.data.github }>Code source</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )

}

export default Card;