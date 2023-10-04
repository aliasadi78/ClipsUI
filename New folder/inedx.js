import * as clips from 'clips';
var DEFRULE_STRING, DEFRULE_STRING0, DEFRULE_STRING1, DEFRULE_STRING2, DEFRULE_STRING3, DEFRULE_STRING4, DEFRULE_STRING5, DEFRULE_STRING6, DEFRULE_STRING7, DEFRULE_STRING8, DEFRULE_STRING9, DEFTEMPLATE_STRING, environment, fact, template;
DEFTEMPLATE_STRING = "\n(deftemplate person\n  (slot name (type STRING))\n  (slot surname (type STRING))\n  (slot birthdate (type SYMBOL)))\n";
DEFRULE_STRING = "\n(defrule Menu\n=>\n(printout t crlf crlf crlf\n\" mahal dard kojast?lotfan yki az gozinehaye zir ra entekhab konid\" crlf crlf\n\" 1.) shekam. \" crlf crlf\n\" 2.) galo.\" crlf crlf\n\" 3.) sineh.\" crlf crlf\n\" 4.) sayer.\" crlf crlf\n\" 5.) EXIT OF SYSTEM..\" crlf crlf crlf\n\" Your answer: \" )\n(assert (selectedindex (read))))\n";
DEFRULE_STRING0 = "\n(defrule A-shekam\n(selectedindex 1)\n=>\n(printout t crlf crlf crlf\" shoma bimary Apandis darid \" crlf\ncrlf \" Thank you for using my Program...\n\"crlf crlf ))\n";
DEFRULE_STRING1 = "\n(defrule Q-galo-tab\n(selectedindex 2)\n=>\n(printout t crlf crlf crlf \" aya shoma tab darid? (Yes | No) \" crlf crlf \" Your answer: \" )\n(assert (ifYesNoTab (read))))\n";
DEFRULE_STRING2 = "\n(defrule A-galo-tab-yes\n(selectedindex 2)\n(ifYesNoTab yes)\n=>\n(printout t crlf crlf crlf \"shoma glodard bakteraei darid \" crlf crlf))\n";
DEFRULE_STRING3 = "\n(defrule A-galo-tab-no\n(selectedindex 2)\n(ifYesNoTab no)\n=>\n(printout t crlf crlf crlf \"shoma glodard virosi darid \" crlf crlf))\n";
DEFRULE_STRING4 = "\n(defrule A-sineh\n(selectedindex 3)\n=>\n(printout t crlf crlf crlf\" shoma sekteh kardeid \" crlf\ncrlf \" Thank you for using my Program...\n\"crlf crlf ))\n";
DEFRULE_STRING5 = "\n(defrule Q-sayer-solfeh\n(selectedindex 4)\n=>\n(printout t crlf crlf crlf \" aya shoma solfe mikonid? (Yes | No) \" crlf crlf \" Your answer: \" )\n(assert (ifYesNoSolfeh (read))))\n";
DEFRULE_STRING6 = "\n(defrule Q-sayer-solfeh-yes-tab\n(selectedindex 4)\n(ifYesNoSolfeh yes)\n=>\n(printout t crlf crlf crlf \" aya shoma tab darid? (Yes | No) \" crlf crlf \" Your answer: \" )\n(assert (ifYesNoTab (read))))\n";
DEFRULE_STRING7 = "\n(defrule A-sayer-solfeh-yes-tab-yes\n(selectedindex 4)\n(ifYesNoSolfeh yes)\n(ifYesNoTab yes)\n=>\n(printout t crlf crlf crlf\" shoma anfolanza darid \" crlf\ncrlf \" Thank you for using my Program...\n\"crlf crlf ))\n";
DEFRULE_STRING8 = "\n(defrule A-sayer-solfeh-yes-tab-no\n(selectedindex 4)\n(ifYesNoSolfeh yes)\n(ifYesNoTab no)\n=>\n(printout t crlf crlf crlf\" shoma sarma khordid\" crlf\ncrlf \" Thank you for using my Program...\n\"crlf crlf ))\n";
DEFRULE_STRING9 = "\n(defrule A-sayer-solfeh-no\n(selectedindex 4)\n(ifYesNoSolfeh no)\n=>\n(printout t \" moteasefane nmitavanam bimari shoma ra tashkhis daham\" crlf\ncrlf \" Thank you for using my Program...\n\"crlf crlf ))\n";
environment = new clips.Environment();
environment.build(DEFTEMPLATE_STRING);
environment.build(DEFRULE_STRING);
environment.build(DEFRULE_STRING0);
environment.build(DEFRULE_STRING1);
environment.build(DEFRULE_STRING2);
environment.build(DEFRULE_STRING3);
environment.build(DEFRULE_STRING4);
environment.build(DEFRULE_STRING5);
environment.build(DEFRULE_STRING6);
environment.build(DEFRULE_STRING7);
environment.build(DEFRULE_STRING8);
environment.build(DEFRULE_STRING9);
template = environment.find_template("person");
fact = template.assert_fact({
  "name": "John",
  "surname": "Doe",
  "birthdate": new clips.Symbol("01/01/1970")
});
environment.run();
