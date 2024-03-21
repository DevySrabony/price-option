import PropTypes from 'prop-types'
import Feature from './Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    console.log(option)
    return (
        <div className='bg-orange-200 p-12 rounded-xl mt-5 flex flex-col'>
            <h2>
                
                <span className="text-xl">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature ,index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-400 w-full rounded-xl font-bold p-2 hover:bg-green-900'>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes = {
    option :PropTypes.object
}

export default PriceOption;

{/* <div>
<h3 className="text-4xl">Best Prices In the town</h3>
         {
           price.map(option => <PriceOption key={option.id} option={price}></PriceOption>)
         }
    </div> */}