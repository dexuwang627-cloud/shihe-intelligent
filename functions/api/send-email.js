import { Resend } from 'resend';

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const resend = new Resend(env.RESEND_API_KEY);
        const body = await request.json();
        const { company, contact_person, phone, inquiry_type, details } = body;

        // Validate required fields
        if (!company || !contact_person || !phone) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Shihe Intelligent <contact@clients.shiheintelligent.com>',
            to: ['longletter123@gmail.com'],
            subject: `【客戶詢問】來自 ${company} 的新留言`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
                .header { text-align: center; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
                .logo { max-width: 150px; height: auto; }
                .content { background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-top: 20px; }
                .title { font-size: 24px; font-weight: bold; color: #111827; margin-bottom: 20px; text-align: center; }
                .field { margin-bottom: 15px; border-bottom: 1px solid #f3f4f6; padding-bottom: 15px; }
                .field:last-child { border-bottom: none; }
                .label { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; display: block; }
                .value { font-size: 16px; color: #1f2937; }
                .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #9ca3af; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div style="text-align: center; margin-bottom: 30px;">
                  <img src="https://www.shiheintelligent.com/photos/logo.svg" alt="世和智能" style="height: 60px; width: auto;">
                </div>
                <div class="content">
                    <h1 class="title">收到新的客戶詢問單</h1>
                    
                    <div class="field">
                        <span class="label">公司名稱 (Company)</span>
                        <div class="value">${company}</div>
                    </div>

                    <div class="field">
                        <span class="label">聯絡人 (Contact Person)</span>
                        <div class="value">${contact_person}</div>
                    </div>

                    <div class="field">
                        <span class="label">聯絡電話 (Phone)</span>
                        <div class="value">${phone}</div>
                    </div>

                    <div class="field">
                        <span class="label">詢問類型 (Inquiry Type)</span>
                        <div class="value">${inquiry_type}</div>
                    </div>

                    <div class="field">
                        <span class="label">詳細內容 (Details)</span>
                        <div class="value" style="white-space: pre-wrap;">${details}</div>
                    </div>
                </div>
                <div class="footer">
                    <p>此郵件由 Shihe Intelligent 官網自動發送</p>
                    <p>© ${new Date().getFullYear()} Shihe Intelligent. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
      `
        });

        if (error) {
            return new Response(JSON.stringify({ error }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
