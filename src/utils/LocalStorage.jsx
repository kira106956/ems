const employees = [
  {
    id: 1,
    firstName: "Rohit",
    email: "a@a.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer Bill Upload",
        description: "Uploaded invoice for customer purchase on website.",
        date: "2025-12-29",
        category: "Billing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "GST Invoice Correction",
        description: "Fix GST details in generated invoice.",
        date: "2026-01-03",
        category: "Billing"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },

  {
    id: 2,
    firstName: "Amit",
    email: "emp2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Furniture Delivery Follow-up",
        description: "Call customer and confirm delivery schedule.",
        date: "2026-01-02",
        category: "Delivery"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Stock Verification",
        description: "Verified delivered furniture stock.",
        date: "2025-12-30",
        category: "Inventory"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Transport Arrangement",
        description: "Failed to arrange vehicle due to unavailability.",
        date: "2025-12-31",
        category: "Logistics"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    }
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "emp3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Collect Pending Payments",
        description: "Contact customers with pending payments and update status.",
        date: "2025-12-28",
        category: "Payments"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "New Payment Reminder",
        description: "Send reminder to customers for due payment.",
        date: "2026-01-02",
        category: "Payments"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },

  {
    id: 4,
    firstName: "Vikram",
    email: "emp4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Website Inquiry Response",
        description: "Reply to customer messages received on the furniture website.",
        date: "2026-01-01",
        category: "Customer Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Complaint Resolution",
        description: "Resolved customer complaint regarding delivery delay.",
        date: "2025-12-30",
        category: "Customer Support"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Live Chat Support",
        description: "Handle live chat queries on website.",
        date: "2026-01-03",
        category: "Customer Support"
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },

  {
    id: 5,
    firstName: "Ankit",
    email: "emp5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Price List Update",
        description: "Uploaded new pricing list after discount offers.",
        date: "2025-12-31",
        category: "Pricing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Seasonal Discount Planning",
        description: "Plan discount structure for upcoming season.",
        date: "2026-01-04",
        category: "Pricing"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];


const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
];

// localStorage.clear();

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}