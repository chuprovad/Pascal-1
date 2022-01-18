import {useDispatch, useSelector} from "react-redux";
import OneRest from "../OneRest/OneRest";
import { v4 as uuidv4 } from 'uuid';
import {useEffect} from "react";
import {getAllRests} from "../../../redux/actions/rests.action";

const RestsList = () => {

    const rests = useSelector(state => state.rests);

    const search = useSelector(state => state.searchInput)

    const dispatch = useDispatch()

useEffect(()=> {
    // dispatch(getAllRests())
}, [rests, search])

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
