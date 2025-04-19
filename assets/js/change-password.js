

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changePasswordBtn');
    if (button) {
      button.addEventListener('click', changePassword);
    }
  });
  
  function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const token = localStorage.getItem('token');
  
    if (!token) {
      showToast('You need to be logged in.', false);
      return;
    }
  
    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast('Please fill in all fields.', false);
      return;
    }
  
    if (newPassword !== confirmPassword) {
      showToast('New passwords do not match.', false);
      return;
    }
  
    fetch('https://get-connected-backend.dev.quantumos.ai/api/auth/change-password', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentPassword: currentPassword,
        newPassword: newPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showToast('Password changed successfully!', true);
        } else {
          showToast(data.message || 'Failed to change password.', false);
        }
      })
      .catch(error => {
        console.error('Change password error:', error);
        showToast('An error occurred. Please try again.', false);
      });
  }
  
  function showToast(message, isSuccess = true) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
  
    toast.classList.remove('hidden');
    toast.classList.remove('bg-green-600', 'bg-red-600');
    toast.classList.add(isSuccess ? 'bg-green-600' : 'bg-red-600');
    toast.classList.add('opacity-100');
  
    setTimeout(() => {
      toast.classList.remove('opacity-100');
      toast.classList.add('opacity-0');
      setTimeout(() => toast.classList.add('hidden'), 500);
    }, 3000);
  }
  