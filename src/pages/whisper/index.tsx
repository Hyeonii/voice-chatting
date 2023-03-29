import { useWhisper } from '@chengsokdara/use-whisper';
import Link from "next/link";

export default function Whisper() {
    const {
        recording,
        speaking,
        transcribing,
        transcript,
        pauseRecording,
        startRecording,
        stopRecording,
    } = useWhisper({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_TOKEN,
        streaming: true,
        timeSlice: 1_000,
        whisperConfig: {
            language: 'ko',
        },
    })

    return (
        <>
            <h1>Whisper Streaming In React</h1>
            <div>
                <p>Recording: {recording}</p>
                <p>Speaking: {speaking}</p>
                <p>Transcribing: {transcribing}</p>
                <p>Transcribed Text: {transcript.text}</p>
                <button onClick={() => startRecording()}>Start</button>
                <button onClick={() => pauseRecording()}>Pause</button>
                <button onClick={() => stopRecording()}>Stop</button>
            </div>
            <Link href="/">Go Back to Home</Link>
        </>
    )
}
