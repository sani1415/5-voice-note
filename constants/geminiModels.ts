/**
 * Available Gemini models for transcription.
 * Standard: used for record-then-transcribe (generateContent).
 * Live: used for real-time Live API (bidiGenerateContent only).
 */

export interface GeminiModelOption {
  id: string;
  label: string;
  description?: string;
}

/** Models for Standard mode (record → stop → transcribe) */
export const STANDARD_MODELS: GeminiModelOption[] = [
  { id: "gemini-3-flash-preview", label: "Gemini 3 Flash (Preview)", description: "Latest fast model" },
  { id: "gemini-2.5-flash-preview-05-20", label: "Gemini 2.5 Flash Preview", description: "Stable preview" },
  { id: "gemini-2.5-pro-preview-05-06", label: "Gemini 2.5 Pro Preview", description: "Higher quality" },
  { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash", description: "Stable, reliable" },
  { id: "gemini-2.0-flash-lite", label: "Gemini 2.0 Flash Lite", description: "Fastest, low cost" },
  { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash", description: "Previous gen" },
  { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro", description: "Previous gen Pro" },
];

/** Models for Live mode (real-time; must support bidiGenerateContent) */
export const LIVE_MODELS: GeminiModelOption[] = [
  { id: "gemini-2.5-flash-native-audio-preview-12-2025", label: "Gemini 2.5 Flash Native Audio (Dec 2025)", description: "Recommended for Live" },
  { id: "gemini-2.5-flash-native-audio-preview-09-2025", label: "Gemini 2.5 Flash Native Audio (Sep 2025)" },
  { id: "gemini-2.5-flash-native-audio-latest", label: "Gemini 2.5 Flash Native Audio (Latest)" },
];

export const DEFAULT_STANDARD_MODEL = "gemini-3-flash-preview";
export const DEFAULT_LIVE_MODEL = "gemini-2.5-flash-native-audio-preview-12-2025";
