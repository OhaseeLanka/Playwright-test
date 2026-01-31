import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('suBha udhaeesanak Lamayi.');
  const output = page.getByText('සුභ උදෑසනක් ළමයි.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});
test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('Mei heta enakota mathak karalaa magee laptop ekei charger eka geenna puluvandha?');
  const output = page.getByText('මේ හෙට එනකොට මතක් කරලා මගේ laptop එකේ charger එක ගේන්න පුලුවන්ද?', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('magee birthday eka maarthu 30.');
  const output = page.getByText('මගේ birthday එක මාර්තු 30.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});
test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('mata Rs.5,000,000 loan ekak ganna puluvandha? Car ekak ganna. mama anivaarayen avurudhu 5 kin gevanavaa. labana maasei idhan magei salary eka Rs. 200,000 kin vaedi venavaa.');
  const output = page.getByText('මට Rs.5,000,000 loan එකක් ගන්න පුලුවන්ද? Car එකක් ගන්න. මම අනිවාරයෙන් අවුරුදු 5 කින් ගෙවනවා. ලබන මාසේ ඉදන් මගේ salary එක Rs. 200,000 කින් වැඩි වෙනවා.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('mee bQQ matath ekka spot ekak allagannavadha? mQQ adha lecture ekata Enna poddak parakku veyi. Bus eka mis unaa mata.');
  const output = page.getByText('මේ බං මටත් එක්ක spot එකක් අල්ලගන්නවද? මං අද lecture එකට එන්න පොඩ්ඩක් පරක්කු වෙයි. Bus එක මිස් උනා මට.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('budhu ammoo !! oyata pissudha? thava chuttakin WhatsApp ekei group ekata message eka yannee.');
  const output = page.getByText(' බුදු අම්මෝ !! ඔයට පිස්සුද? තව චුට්ටකින් WhatsApp එකේ group එකට message එක යන්නේ.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('adha dhina shrii laQQkaavei saha vidheeshayee sidhuviim sambanDhayen vaedhagath puvath kihipayak avaDhaanayata lak vei. shrii laQQkaa maDhYAma baeQQkuva naithika polii anupaathaya 7.75% lesama pavathvaagena yaamata thiiraNaya kara aethi bava vaarthaa veyi. IMF samiikShaNayak idhiriyeedhii paevathviimata niyamitha baevin, aarThika sThaavarathaavaya pavathvaa gaeniima sadhahaa meya vaedhagath piyavarak lesa saelakee.');
  const output = page.getByText(' අද දින ශ්‍රී ලංකාවේ සහ විදේශයේ සිදුවීම් සම්බන්ධයෙන් වැදගත් පුවත් කිහිපයක් අවධානයට ලක් වේ. ශ්‍රී ලංකා මධ්‍යම බැංකුව නෛතික පොලී අනුපාතය 7.75% ලෙසම පවත්වාගෙන යාමට තීරණය කර ඇති බව වාර්තා වෙයි. IMF සමීක්ෂණයක් ඉදිරියේදී පැවත්වීමට නියමිත බැවින්, ආර්ථික ස්ථාවරතාවය පවත්වා ගැනීම සදහා මෙය වැදගත් පියවරක් ලෙස සැලකේ.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('mama call karannam, namuth dhaen busy.');
  const output = page.getByText(' මම call කරන්නම්, නමුත් දැන් busy.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('samaavenna, mama poddak parakku vunaa.');
  const output = page.getByText(' සමාවෙන්න, මම පොඩ්ඩක් පරක්කු වුනා.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('godak dhurata api heta yanne naehae.');
  const output = page.getByText(' ගොඩක් දුරට අපි හෙට යන්නෙ නැහැ.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('vahaama usaaviyata aeththa kiyanna.');
  const output = page.getByText('වහාම උසාවියට ඇත්ත කියන්න. ', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('Photographs tika attach karala perera@gmail.com email address ekata hari 0774150243 Viber number ekata send karanna.');
  const output = page.getByText('Photographs ටික attach කරල පෙරෙර@gmail.com email address එකට හරි 0774150243 Viber number එකට send කරන්න.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('oyaa    eeka correct karalaa naehae.');
  const output = page.getByText(' ඔයා    ඒක correct කරලා නැහැ.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('venuri, Isiri, Sneha, Savin, lakshan -  Heta enakota MATHS HOMEWORK complete karan enna.');
  const output = page.getByText(' වෙනුරි, ඉසිරි, ස්නෙහ, සවින්, ලක්ශන් - හෙට එනකොට MATHS HOMEWORK complete කරන් එන්න.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('machaQQ, avulak naee...api gaanata karamu.');
  const output = page.getByText(' මචං, අවුලක් නෑ...අපි ගානට කරමු.', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('hari,mama ammatadhennam');
  const output = page.getByText(' හරි,මම අම්මටදෙන්නම්', { exact: true });
  await expect(output).toBeVisible({ timeout: 50000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('USD 200k wage amount ekak.');
  const output = page.getByText('USD 200ක් wage amount එකක්.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('mehema (->) sign ekak thibunoth ethanin dhakuNata haerenna, ethakota grade 12 commerce building eka hambeyi.');
  const output = page.getByText('මෙහෙම (->) sign එකක් තිබුනොත් එතනින් දකුණට හැරෙන්න, එතකොට grade 12 commerce building එක හම්බෙයි.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('“ela kiri!” kiyalaa kivvaa.');
  const output = page.getByText('“එල කිරි!” කියලා කිව්වා.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});


test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('URL eka Copy kaRala eVanna.');
  const output = page.getByText('URL එක Copy කRඅල එVඅන්න.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('eksath jaathiingee sQQviDhaanaya muulYAmaya vashayen biDHAvaetiimee avadhaanamakata lakva aethi bava ehi maha leekam anthooniyoo guteeres mahathaa mahathaa anathuru aGAvaa thibee.ohu saDHAhan karannee, saamaajika rataval kihipayak visin anivaarayen dhaayaka mudhal geviima paehaera haeriima heethuven mema thaththvaya udhgatha vii aethi bavaya.mema muulYA arbudhaya thavadhuratath gaeBuru vemin pavathina athara, eya eksath jaathiingee vaedasatahan kriyaathmaka kiriimata barapathaLa balapaeem aethi karana bava guteeres mahathaa penvaa dhii aetha.');
  const output = page.getByText('එක්සත් ජාතීන්ගේ සංවිධානය මූල්‍යමය වශයෙන් බිඳවැටීමේ අවදානමකට ලක්ව ඇති බව එහි මහ ලේකම් අන්තෝනියෝ ගුටේරෙස් මහතා මහතා අනතුරු අඟවා තිබේ.ඔහු සඳහන් කරන්නේ, සාමාජික රටවල් කිහිපයක් විසින් අනිවාරයෙන් දායක මුදල් ගෙවීම පැහැර හැරීම හේතුවෙන් මෙම තත්ත්වය උද්ගත වී ඇති බවය.මෙම මූල්‍ය අර්බුදය තවදුරටත් ගැඹුරු වෙමින් පවතින අතර, එය එක්සත් ජාතීන්ගේ වැඩසටහන් ක්‍රියාත්මක කිරීමට බරපතළ බලපෑම් ඇති කරන බව ගුටේරෙස් මහතා පෙන්වා දී ඇත. ', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('laebuvaavuu siQQhala saha dhemaLa avurudhdha oba saemata saamaya sathuta piri suBha aluth avurudhdhak veevaa!!!');
  const output = page.getByText('ලැබුවාවූ සිංහල සහ දෙමළ අවුරුද්ද ඔබ සැමට සාමය සතුට පිරි සුභ අලුත් අවුරුද්දක් වේවා!!!', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('eksath jaathiingee sQQviDhaanaya muulYAmaya vashayen biDHAvaetiimee avadhaanamakata lakva aethi bava ehi maha leekam anthooniyoo guteeres mahathaa mahathaa anathuru aGAvaa thibee.ohu saDHAhan karannee, saamaajika rataval kihipayak visin anivaarayen dhaayaka mudhal geviima paehaera haeriima heethuven mema thaththvaya udhgatha vii aethi bavaya.mema muulYA arbudhaya thavadhuratath gaeBuru vemin pavathina athara, eya eksath jaathiingee vaedasatahan kriyaathmaka kiriimata barapathaLa balapaeem aethi karana bava guteeres mahathaa penvaa dhii aetha.');
  const output = page.getByText('එක්සත් ජාතීන්ගේ සංවිධානය මූල්‍යමය වශයෙන් බිඳවැටීමේ අවදානමකට ලක්ව ඇති බව එහි මහ ලේකම් අන්තෝනියෝ ගුටේරෙස් මහතා මහතා අනතුරු අඟවා තිබේ.ඔහු සඳහන් කරන්නේ, සාමාජික රටවල් කිහිපයක් විසින් අනිවාරයෙන් දායක මුදල් ගෙවීම පැහැර හැරීම හේතුවෙන් මෙම තත්ත්වය උද්ගත වී ඇති බවය.මෙම මූල්‍ය අර්බුදය තවදුරටත් ගැඹුරු වෙමින් පවතින අතර, එය එක්සත් ජාතීන්ගේ වැඩසටහන් ක්‍රියාත්මක කිරීමට බරපතළ බලපෑම් ඇති කරන බව ගුටේරෙස් මහතා පෙන්වා දී ඇත. ', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('gaemmak thamayi oyaa nam.');
  const output = page.getByText('ගැම්මක් තමයි ඔයා නම්.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Pos_Fun_0025', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('mama iiyee CV eka hadhalaa ivara kaLaa.');
  const output = page.getByText('මම ඊයේ CV එක හදලා ඉවර කළා.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});



//Negative

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('anee mata heta potha pennanna PULUWAN');
  const output = page.getByText('  අනේ මට හෙට පොත පෙන්නන්න බෑ.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('api heta lecture ekka discuss karalaa solution ekak hoyaa gamu.');
  const output = page.getByText('හොයා ගමු solution එකක් අපි හෙට lecture එක්ක discuss කරලා', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('pissu karanna epaa. Api kohomahari        eekavisadhagamu.');
  const output = page.getByText('පිස්සු කරන්න එපා   අපි කොහොමහරි        ඒකවිසදගමු.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('no 69, pansala para, Maharagama.');
  const output = page.getByText('no 70, pansala para, Maharagama.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('uNU vathura tikakata piti (mesa haedhi 2 - 3 )dhaala hodhata kalavam karanna.');
  const output = page.getByText('uNU vathura tikakata piti (table spoon 2 - 3 )dhaala hodhata kalavam karanna.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('adhata Naya ivarayi');
  const output = page.getByText('අදට ඓණYඅ ඉවරයි', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('karuNaakaralaa mata Rs.1000 dhenna ');
  const output = page.getByText('කරුණාකරලා මට Rs.10000 දෙන්න ', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('adha dhinaya 2026-02-08');
  const output = page.getByText('අද දිනය 20260208', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('oyaa pudhuma vunaadha?');
  const output = page.getByText('ඔයා පුදුම වුනාද', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});

test('Neg_Fun_00010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.fill('api papers tika ivara kaLaa.');
  const output = page.getByText('අපි paper ටික ඉවර කළා.', { exact: true });
  await expect(output).toBeVisible({ timeout: 70000 });
  const translatedText = await output.textContent();
  console.log('Translated Text:', translatedText);
  await page.pause();
});



test.describe('UI Functional Tests - User Interface Behavior', () => {

test.beforeEach(async ({ page }) => {
await page.goto('https://www.swifttranslator.com/');
await page.waitForLoadState('networkidle');
await page.waitForTimeout(1000);
});

 

test('Pos_UI_0001', async ({ page }) => {
const words = ['mama', 'gedhara', 'yanna', 'inne'];
const inputField = page.locator('textarea').first();
const outputField = page.locator('textarea').last();
await inputField.clear();
await page.waitForTimeout(500);

for (const word of words) {
await inputField.type(word + ' ', { delay: 50 });
await page.waitForTimeout(800);
}

const actual = await outputField.inputValue();
expect(actual.trim().length).toBeGreaterThan(0);
});

});












