const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	table=document.querySelector('table')
	prices=Array.from((table.querySelectorAll('.price')))
	prices=prices.map(value => Number(value.textContent))
	// console.log(prices);
	sum=prices.reduce((sum,value) => sum+value,0)
	newRow= document.createElement('tr')
	sumVal=document.createElement('td')
	sumVal.textContent=sum
	newRow.appendChild(sumVal)
	table.appendChild(newRow)
}

getSumBtn.addEventListener("click", getSum);

