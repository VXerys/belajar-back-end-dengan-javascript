const initialMemoryUsage = new MemoryUsage
.withInitialMemoryUsage(100)
.withMaxMemoryUsage(1000)

const yourName = "sehan"
const environment = "development"
 
for(let i = 0; i <= 10000; i++) {
     const memoryUsage = initialMemoryUsage
     .withMemoryUsage(memoryUsage.getMemoryUsage() + 1)
     .withMemoryUsage(memoryUsage.getMemoryUsage() + 1)
     
     .withMemoryUsage(memoryUsage.getMemoryUsage() + 1)
     .withMemoryUsage(memoryUsage.getMemoryUsage() + 1)
}
 
const currentMemoryUsage = initialMemoryUsage
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);