webpackJsonp([187,220],{926:function(t,e){t.exports={content:["section",["p","To select or input a date."],["h2","When To Use"],["p","By clicking the input box, you can select a date from a popup calendar."]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",filename:"components/date-picker/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","There are three kinds of picker:"],["ul",["li",["p","DatePicker"]],["li",["p","MonthPicker"]],["li",["p","RangePicker"]]],["p",["strong","Note:"]," Part of locale of DatePicker, MonthPicker, RangePicker is read from value. So, please set the locale of moment correctly."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// It\'s recommended to set locale in entry file globaly.</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2015-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","import moment from 'moment';\n\n// It's recommended to set locale in entry file globaly.\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />"]],["h3","Common API"],["p","The following APIs are shared by DatePicker, MonthPicker, RangePicker."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","allowClear"],["td","Whether to show clear button"],["td","boolean"],["td","true"]],["tr",["td","disabled"],["td","determine whether the DatePicker is disabled"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","picker className"],["td","string"],["td","''"]],["tr",["td","style"],["td","to customize the style of the input box"],["td","object"],["td","{}"]],["tr",["td","popupStyle"],["td","to customize the style of the popup calendar"],["td","object"],["td","{}"]],["tr",["td","size"],["td","determine the size of the input box, the height of ",["code","large"]," and ",["code","small"],", are 32px and 22px respectively, while default size is 28px"],["td","string"],["td","-"]],["tr",["td","locale"],["td","localization configuration"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"default"]]],["tr",["td","disabledDate"],["td","specify the date that cannot be selected"],["td","(currentDate: moment) => boolean"],["td","-"]],["tr",["td","getCalendarContainer"],["td","to set the container of the floating layer, while the default is to create a ",["code","div"]," element in ",["code","body"]],["td","function(trigger)"],["td","-"]],["tr",["td","open"],["td","open state of picker"],["td","boolean"],["td","-"]],["tr",["td","onOpenChange"],["td","a callback function, can be executed whether the popup calendar is popped up or closed"],["td","function(status)"],["td","-"]],["tr",["td","placeholder"],["td","placeholder of date input"],["td","string","|","RangePicker[]"],["td","-"]]]],["h3","DatePicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","format"],["td","to set the date format, refer to ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-MM-DD"']],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(date: moment, dateString: string)"],["td","-"]],["tr",["td","showTime"],["td","to provide an additional time selection"],["td","object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]]],["tr",["td","showTime.defaultValue"],["td","to set default time of selected date, ",["a",{title:null,href:"https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date"},"demo"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"]],["tr",["td","showToday"],["td",'whether to show "Today" button'],["td","boolean"],["td","true"]],["tr",["td","disabledTime"],["td","to specify the time that cannot be selected"],["td","function(date)"],["td","-"]],["tr",["td","onOk"],["td","callback when click ok button"],["td","function()"],["td","-"]],["tr",["td","renderExtraFooter"],["td","render extra footer in panel"],["td","() => React.ReactNode"],["td","-"]]]],["h3","MonthPicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","format"],["td","to set the date format, refer to ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-MM"']],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(date: moment, dateString: string)"],["td","-"]],["tr",["td","monthCellContentRender"],["td","Custom month cell content render method"],["td","function(date, locale): ReactNode"],["td","-"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td","[",["a",{title:null,href:"http://momentjs.com/"},"moment"],", ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"]"],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td","[",["a",{title:null,href:"http://momentjs.com/"},"moment"],", ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"]"],["td","-"]],["tr",["td","format"],["td","to set the date format"],["td","string"],["td",'"YYYY-MM-DD HH:mm:ss"']],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(dates: ",["span","moment, moment"],", dateStrings: ",["span","string, string"],")"],["td","-"]],["tr",["td","showTime"],["td","to provide an additional time selection"],["td","object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]]],["tr",["td","showTime.defaultValue"],["td","to set default time of selected date, ",["a",{title:null,href:"https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date"},"demo"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[]"],["td",["span","moment(), moment()"]]],["tr",["td","disabledTime"],["td","to specify the time that cannot be selected"],["td","function(dates: ",["span","moment, moment"],", partial: ",["code","'start'|'end'"],")"],["td","-"]],["tr",["td","ranges"],["td","preseted ranges for quick selection"],["td","{ ",["span","range: string"],": ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[] }"],["td","-"]],["tr",["td","renderExtraFooter"],["td","render extra footer in panel"],["td","() => React.ReactNode"],["td","-"]],["tr",["td","onOk"],["td","callback when click ok button"],["td","function()"],["td","-"]]]],["style","\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"]]}}});