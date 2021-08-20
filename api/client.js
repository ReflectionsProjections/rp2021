const proxyurl = ""

export const fetchConferenceData = async () => {
  const url = `/data/rp2020.json`;
  const api_call = await fetch(proxyurl + url)
  const data = await api_call.json();
  return data;
};