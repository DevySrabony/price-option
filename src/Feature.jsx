import { AiFillCaretRight } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div >
            <p  className="flex items-center"><AiFillCaretRight className="mr-2" />{feature}</p>
        </div>
    );
};

export default Feature;