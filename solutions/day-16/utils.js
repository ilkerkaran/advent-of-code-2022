
export const structData = (arr) => {
  const valveMap = {}
  const sensors = []
  for (let i = 0; i < arr.length; i++) {
    const [targetValveData,tunnelData] = arr[i].split(";")
    const [,valve,,,rateRaw] = targetValveData.split(" ")[1]
    const rate = +rateRaw.split("=")[1]
    const valveObj = {id:valve,rate,adj:[]}
    const tunnels = tunnelData.substring(tunnelData.indexOf("valve")+6).replace(" ","").split(",")
    valveObj.adj.push(...tunnels)
    valveMap[valve]
  }
  return valveMap
}
