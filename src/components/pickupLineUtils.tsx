export async function fetchPickupLines(): Promise<string[]> {
    const response = await fetch('pickupline.txt');
    const text = await response.text();
    return text.split('\n').filter((line) => line.trim() !== '');
  }
  