import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "../globals.css"

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className='h-screen'>

        <NextIntlClientProvider messages={messages}>
            <div id="root" className='default'>
            {children}
            </div>
  
        </NextIntlClientProvider>


      </body>
    </html>
  );
}