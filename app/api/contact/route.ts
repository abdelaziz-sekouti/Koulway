import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, bookingType, guests, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields (Name, Phone, Message).' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const notificationId = `NOTIF-${Date.now()}`;

    // Format the email notification structure
    const emailPayload = {
      id: notificationId,
      to: 'contact@koulway.ma',
      bcc: 'sekoutiabdelaziz0@gmail.com',
      subject: `[Koulway Tetouan Alert] New ${bookingType || 'Inquiry'} from ${name}`,
      timestamp,
      data: {
        customerName: name,
        customerPhone: phone,
        customerEmail: email || 'Not provided',
        requestType: bookingType || 'General Inquiry',
        partySize: guests || 'N/A',
        message: message,
      },
      text: `
=== NOUVELLE NOTIFICATION - RESTAURANT KOULWAY TÉTOUAN ===
Référence: ${notificationId}
Date/Heure: ${timestamp}

Client: ${name}
Téléphone / WhatsApp: ${phone}
Email: ${email || 'Non renseigné'}
Type de demande: ${bookingType || 'Demande générale'}
Nombre de personnes: ${guests || 'N/A'}

Message du client:
${message}

WhatsApp direct client: https://wa.me/${phone.replace(/[^0-9]/g, '')}
===========================================================
      `.trim(),
    };

    // Output formatted email notification to server console for auditing and tracking
    console.log('[EMAIL NOTIFICATION SENT]:', JSON.stringify(emailPayload, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Notification sent successfully to Koulway Tetouan management.',
        notificationId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing notification.' },
      { status: 500 }
    );
  }
}
