export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const email = formData.get('email');

  if (!email || !email.includes('@')) {
    return Response.redirect('https://www.killarney.ai/?subscribed=error', 303);
  }

  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '736d3cef-b983-41e2-9871-3992c524dec8',
        email:      email,
        subject:    'New early access signup — killarney.ai',
        from_name:  'Killarney.ai',
      }),
    });
  } catch (e) {
    return Response.redirect('https://www.killarney.ai/?subscribed=error', 303);
  }

  return Response.redirect('https://www.killarney.ai/?subscribed=1', 303);
}
