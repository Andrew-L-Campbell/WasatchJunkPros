const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO;
const cors = require('cors');

const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2); // Months are 0-based
    const day = ('0' + dateObj.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
};

const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Convert to 12-hour format and handle midnight
    return `${formattedHour}:${minutes} ${ampm}`;
};


const allowedOrigins = ['http://localhost:3000', 'https://wasatchjunkpros/book-now', 'https://wasatchjunkpros'];

app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
}));


app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send-email' , async (req, res) => {
    const { firstName, lastName, email, date, time, phoneNumber, description } = req.body;

    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);

    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: emailUser,
            pass: emailPass
        }
    });
    const mailOptions = {
        from: email,
        to: emailTo,
        subject: 'New Appointment Scheduled',
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nDate: ${formattedDate}\nTime: ${formattedTime}\nPhone: ${phoneNumber}\nDescription: ${description}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Email Sent!');
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Error sending email');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
