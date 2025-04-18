document.addEventListener('DOMContentLoaded', () => {
    const estDataStr = localStorage.getItem('estimatesInfo');
    console.log("estimates", estDataStr);
  
    if (estDataStr) {
      const contactInfo = JSON.parse(estDataStr);
  
      const leadNameList = document.getElementById('estimate-lead-name');
      const addressList = document.getElementById('estimate-address');
      const scopeList = document.getElementById('estimate-scope');
      const bidAmountList = document.getElementById('estimate-bid-amount');
      const startDateList = document.getElementById('estimate-start-date');
  
    //   if (
    //     leadNameList && 
    //     addressList && 
    //     scopeList && 
    //     bidAmountList && 
    //     startDateList
    //   ) {
        contactInfo.data.forEach((contact) => {
          const nameEl = document.createElement('p');
          nameEl.textContent = contact.leadName || 'Unknown';
          leadNameList.appendChild(nameEl);
  
        //   const addrs = document.createElement('p');
        //   addrs.textContent = contact.address || 'No Address';
        //   addressList.appendChild(addrs);
  
          const bidamt = document.createElement('p');
          bidamt.textContent = contact.bidAmount ? `$${contact.bidAmount}` : '$0';
          bidAmountList.appendChild(bidamt);
  
        //   const scope = document.createElement('p');
        //   scope.textContent = contact.scope || 'N/A';
        //   scopeList.appendChild(scope);
  
          const strdate = document.createElement('p');
          strdate.textContent = contact.startDate || 'No Date';
          startDateList.appendChild(strdate);
        });
      } else {
        console.error('One or more target elements were not found in the DOM.');
      }
    // } else {
    //   console.warn('No user info found in localStorage');
    }
  );
  