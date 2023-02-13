export function formatAddress(address: string | undefined, length = 20) {
  if (!address) return "";

  // to avoid trimming small names by default
  if (address.length < length) return address

  return (
    address.substring(0, length / 2) +
    "..." +
    address.substring(address.length - length / 2, address.length)
  );
}