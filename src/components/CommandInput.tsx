import { useWhisper } from '@chengsokdara/use-whisper';
import { memo } from 'react';

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

    const hadleStopRecording = async () => {
        await stopRecording();

        if (transcript.text) {
            handleCommandState('commendText', transcript.text);
        }
    }

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
            <button onClick={hadleStopRecording}>Stop</button>
        </div>
    )
}

export default memo(CommandInput);