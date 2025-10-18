import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config'; 
import { collection, onSnapshot, doc, updateDoc, arrayUnion } from 'firebase/firestore';
const PatientView = () => {
    const [queue, setQueue] = useState([]);
    const [nowServing, setNowServing] = useState(0);
    const [patientName, setPatientName] = useState('');

    const clinicId = "your-clinic-id";

    useEffect(() => {
        const docRef = doc(db, 'clinics', clinicId);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setQueue(data.queue || []);
                setNowServing(data.nowServing || 0);
            } else {
                console.log("No such clinic!");
            }
        });
        return () => unsubscribe();
    }, [clinicId]);

    const handleJoinQueue = async (e) => {
        e.preventDefault();
        if (patientName.trim() === '') return;

        const docRef = doc(db, 'clinics', clinicId);
        await updateDoc(docRef, {
            queue: arrayUnion({ name: patientName, number: queue.length + nowServing + 1 })
        });
        
        setPatientName('');
        alert(`You have been added to the queue!`);
    };

    return (
        <div>
            <h1>Live Clinic Queue [cite: 29]</h1>
            <h2>Now Serving: Token #{nowServing}</h2>
            
            <div className="queue-list">
                <h3>Waiting List</h3>
                <ul>
                    {queue.map((patient, index) => (
                        <li key={index}>
                            Token #{patient.number}: {patient.name}
                        </li>
                    ))}
                </ul>
            </div>

            <form onSubmit={handleJoinQueue}>
                <input 
                    type="text" 
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter your name" 
                />
                <button type="submit">Join Queue</button>
            </form>
        </div>
    );
};
export default PatientView;