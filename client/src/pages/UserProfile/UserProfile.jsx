import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch()
    //TODO:
  }, [])

  return (
    <div>
      
    </div>
  )
}

