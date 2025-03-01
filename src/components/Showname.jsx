import { useParams } from 'react-router-dom';
import { useName } from '../context/NameContext';
import { useEffect } from 'react';

const Showname = () => {
  const { getNameById, singleName, loading } = useName();
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    if (id) {
      getNameById(id).then(() => {
        if (!isMounted) return;
      });
    }

    return () => {
      isMounted = false; // Cleanup function to prevent state update on unmounted component
    };
  }, [id, getNameById]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : singleName ? (
        <h2>Name: {typeof singleName === 'object' ? singleName.name : singleName}</h2>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Showname;
