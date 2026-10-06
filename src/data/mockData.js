export const currentUser = {
  name: "Will Viana",
  email: "will@studio.viana",
  role: "Freelance Designer",
  initials: "WV",
};

export const stats = [
  { id: "projects", label: "Active Projects", value: "8",       change: "+2 this month", trend: "up" },
  { id: "earnings", label: "Earnings (Oct)",  value: "$12,480", change: "+18% vs Sep",   trend: "up" },
  { id: "tasks",    label: "Tasks Due",       value: "14",      change: "3 overdue",     trend: "down" },
  { id: "clients",  label: "Active Clients",  value: "5",       change: "No change",     trend: "flat" },
];

export const activities = [
  { id: 1, type: "payment", text: "Payment received from Northwind Co.",        time: "2h ago",     amount: "+$2,400" },
  { id: 2, type: "task",    text: "Task 'Landing page copy' marked complete",   time: "5h ago" },
  { id: 3, type: "message", text: "New message from Maya at Framewerk",         time: "Yesterday" },
  { id: 4, type: "project", text: "Project 'Cobalt rebrand' created",           time: "2 days ago" },
  { id: 5, type: "payment", text: "Invoice #1042 sent to Baseline",             time: "3 days ago" },
];

export const notifications = [
  { id: 1, text: "Northwind Co. paid invoice #1041", time: "2h ago",    unread: true },
  { id: 2, text: "Maya commented on 'Homepage v2'",  time: "5h ago",    unread: true },
  { id: 3, text: "Deadline tomorrow: Cobalt logo",   time: "Yesterday", unread: false },
];

export const projects = [
  { id: 1, name: "Cobalt Rebrand",           client: "Cobalt",    status: "In progress", deadline: "2025-11-12", budget: 4800 },
  { id: 2, name: "Framewerk Marketing Site", client: "Framewerk", status: "Review",      deadline: "2025-10-28", budget: 6200 },
  { id: 3, name: "Northwind Mobile App",     client: "Northwind", status: "In progress", deadline: "2025-12-01", budget: 12000 },
  { id: 4, name: "Loomly Brand Refresh",     client: "Loomly",    status: "Completed",   deadline: "2025-09-30", budget: 3400 },
  { id: 5, name: "Baseline Dashboard",       client: "Baseline",  status: "In progress", deadline: "2025-11-20", budget: 7800 },
  { id: 6, name: "Cobalt Design System",     client: "Cobalt",    status: "Not started", deadline: "2025-12-15", budget: 9500 },
];

export const earningsByMonth = [
  { month: "Jan", earnings: 6200 },
  { month: "Feb", earnings: 7100 },
  { month: "Mar", earnings: 5400 },
  { month: "Apr", earnings: 8900 },
  { month: "May", earnings: 9400 },
  { month: "Jun", earnings: 8200 },
  { month: "Jul", earnings: 7600 },
  { month: "Aug", earnings: 10500 },
  { month: "Sep", earnings: 11200 },
  { month: "Oct", earnings: 12480 },
];

export const taskBreakdown = [
  { name: "Design",   value: 42, color: "#6366f1" },
  { name: "Dev",      value: 28, color: "#22c55e" },
  { name: "Meetings", value: 18, color: "#f59e0b" },
  { name: "Admin",    value: 12, color: "#94a3b8" },
];