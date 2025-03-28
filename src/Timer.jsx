import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import SecondInput from './Timer/SecondInput';
import SelectSound from './Timer/SelectSound';
import TimerOutput from './Timer/TimerOutput';

const Timer = () => {
    const [time, setTime] = useState(0); 
    const [inputTime, setInputTime] = useState(''); 
    const [isRunning, setIsRunning] = useState(false);
    const [selectedSound, setSelectedSound] = useState('');
    const timerRef = useRef(null);
    const soundRef = useRef(null); 

    const handleStart = () => {
        if (time > 0 && selectedSound) {
            setIsRunning(true);
        }
    };

    const handleStop = () => {
        setIsRunning(false);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleReset = () => {
        handleStop();
        setTime(0);
        setInputTime('');
    };

    const handleTimeChange = (e) => {
        setInputTime(e.target.value);
    };

    const handleSoundChange = (e) => {
        setSelectedSound(e.target.value);
    };

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current);
                        timerRef.current = null;
                        setIsRunning(false);
                        playSound();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isRunning]);

    const playSound = () => {
        if (selectedSound) {
            soundRef.current = new Howl({
                src: [`/mp3/${selectedSound}`],
            });
            soundRef.current.play();
        }
    };

    const handleSetTime = () => {
        const parsedTime = parseInt(inputTime, 10);
        if (!isNaN(parsedTime) && parsedTime > 0) {
            handleStop();
            setTime(parsedTime);
        }
    };

    return (
        <section className='border-3 my-6 p-6 rounded-4xl'>
            <h1 className='text-2xl font-bold text-center mb-4 text-gray-800'>Timer</h1>
            <SecondInput
                handleTimeChange={handleTimeChange}
                handleSetTime={handleSetTime}
                inputTime={inputTime}
            />
            <SelectSound
                selectedSound={selectedSound}
                handleSoundChange={handleSoundChange}
            />
            <TimerOutput
                time={time}
                isRunning={isRunning}
                selectedSound={selectedSound}
                handleStart={handleStart}
                handleStop={handleStop}
                handleReset={handleReset}
            />
        </section>
    );
};

export default Timer;