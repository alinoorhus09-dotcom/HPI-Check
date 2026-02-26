export default async function handler(req, res) {
  const { vrm } = req.query;
  
  try {
    const response = await fetch('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pKb6MZppAVjFm2tpe5UP7BdFsEs1vzj5ZWnWWSic'
      },
      body: JSON.stringify({ registrationNumber: vrm })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to DVLA" });
  }
}
