import { useWhisper } from '@chengsokdara/use-whisper';
import { useEffect, memo } from 'react';

interface OptionTypes {
    commendText: string;
    handleCommandState: (key: string, vlaue: string) => void;
}

function CommandInput({commendText, handleCommandState}: OptionTypes) {

    const {
        recording,
        transcript,
        startRecording,
        stopRecording,
    } = useWhisper({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_TOKEN,
        timeSlice: 1_000,
        whisperConfig: {
            language: 'ko',
        },
    })

    useEffect(() => {
        if (transcript.text && transcript.text !== '') {
            handleCommandState('commendText', transcript.text);
        }
    }, [transcript.text]);

    return (
        <div>
            <h3>Command</h3>
            <input
                type="text"
                defaultValue={commendText}
                style={{borderColor: recording ? 'red' : 'black', backgroundColor: recording ? 'lavender' : 'white'}}
                onChange={(e) => handleCommandState('commendText', e.target.value)}
            />
            <button onClick={startRecording}>Start</button>
            <button onClick={stopRecording}>Stop</button>
        </div>
    )
}

export default memo(CommandInput);