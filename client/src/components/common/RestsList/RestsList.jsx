import { useSelector} from "react-redux";
import OneRest from "../OneRest/OneRest";
import { v4 as uuidv4 } from 'uuid';

const RestsList = () => {

    const rests = useSelector(state => state.rests);

    return (
        <div>
          <h2>List of restaurants on the map</h2>
          {rests &&
            rests.map(rest => <OneRest key={uuidv4()} rest={rest} />)
          }
        </div>
    );
};

export default RestsList;
