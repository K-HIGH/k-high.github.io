-- Create pre-reservations table for 돋보길 app
CREATE TABLE IF NOT EXISTS public.pre_reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  age INTEGER,
  preferred_features TEXT[],
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.pre_reservations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is pre-registration, no auth required)
-- Allow anyone to insert pre-reservations
CREATE POLICY "Allow public to insert pre-reservations" 
  ON public.pre_reservations 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to view their own pre-reservations by email
CREATE POLICY "Allow users to view their own pre-reservations" 
  ON public.pre_reservations 
  FOR SELECT 
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_pre_reservations_email ON public.pre_reservations(email);
CREATE INDEX IF NOT EXISTS idx_pre_reservations_created_at ON public.pre_reservations(created_at);
