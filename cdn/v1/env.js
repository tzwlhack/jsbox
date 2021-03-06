"use strict";

window.jsbox_envs = {
  'element-ui': {
    type: 'html',
    code:
    /* html*/
    "<div id='app'>\n<el-form ref=\"form\" :model=\"form\" label-width=\"80px\">\n    <el-form-item label=\"\u6D3B\u52A8\u540D\u79F0\">\n    <el-input v-model=\"form.name\"></el-input>\n    </el-form-item>\n    <el-form-item label=\"\u6D3B\u52A8\u533A\u57DF\">\n    <el-select v-model=\"form.region\" placeholder=\"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF\">\n        <el-option label=\"\u533A\u57DF\u4E00\" value=\"shanghai\"></el-option>\n        <el-option label=\"\u533A\u57DF\u4E8C\" value=\"beijing\"></el-option>\n    </el-select>\n    </el-form-item>\n    <el-form-item label=\"\u6D3B\u52A8\u65F6\u95F4\">\n    <el-col :span=\"11\">\n        <el-date-picker type=\"date\" placeholder=\"\u9009\u62E9\u65E5\u671F\" v-model=\"form.date1\" style=\"width: 100%;\"></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n        <el-time-picker placeholder=\"\u9009\u62E9\u65F6\u95F4\" v-model=\"form.date2\" style=\"width: 100%;\"></el-time-picker>\n    </el-col>\n    </el-form-item>\n    <el-form-item label=\"\u5373\u65F6\u914D\u9001\">\n    <el-switch v-model=\"form.delivery\"></el-switch>\n    </el-form-item>\n    <el-form-item label=\"\u6D3B\u52A8\u6027\u8D28\">\n    <el-checkbox-group v-model=\"form.type\">\n        <el-checkbox label=\"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8\" name=\"type\"></el-checkbox>\n        <el-checkbox label=\"\u5730\u63A8\u6D3B\u52A8\" name=\"type\"></el-checkbox>\n        <el-checkbox label=\"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8\" name=\"type\"></el-checkbox>\n        <el-checkbox label=\"\u5355\u7EAF\u54C1\u724C\u66DD\u5149\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n    </el-form-item>\n    <el-form-item label=\"\u7279\u6B8A\u8D44\u6E90\">\n    <el-radio-group v-model=\"form.resource\">\n        <el-radio label=\"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9\"></el-radio>\n        <el-radio label=\"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39\"></el-radio>\n    </el-radio-group>\n    </el-form-item>\n    <el-form-item label=\"\u6D3B\u52A8\u5F62\u5F0F\">\n    <el-input type=\"textarea\" v-model=\"form.desc\"></el-input>\n    </el-form-item>\n    <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">\u7ACB\u5373\u521B\u5EFA</el-button>\n    <el-button>\u53D6\u6D88</el-button>\n    </el-form-item>\n</el-form>\n</div>\n<script>\nvar app = new Vue({\n    el: '#app',\n    data() {\n    return {\n        form: {\n        name: '',\n        region: '',\n        date1: '',\n        date2: '',\n        delivery: false,\n        type: [],\n        resource: '',\n        desc: ''\n        }\n    }\n    },\n    methods: {\n    onSubmit() {\n        console.log('submit!', this.form);\n    }\n    }\n})\n</script>",
    deps: ['element-ui']
  },
  'cnchar': {
    code:
    /* javascript*/
    "\nlog('\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD'.spell());\nlog('\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD'.stroke('array'));\n",
    deps: ['cnchar']
  },
  'vue': {
    code:
    /* html*/
    "\n<div id=\"app\">\n  {{ message }}\n</div>\n<script>\n    var app = new Vue({\n        el: '#app',\n        data: {\n            message: 'Hello Vue!'\n        }\n    })\n</script>\n        ",
    type: 'html',
    deps: ['vue']
  }
};
/**
log([
    '??????'.spell(), // ?????? 'CeShi'
    '??????'.spell('up'), // ?????? 'CESHI'
    '??????'.spell('low'), // ?????? 'ceshi'
    '??????'.spell('first'), // ?????? 'CS'
    '??????'.spell('first', 'low'), // ?????? 'cs'
    '??????'.spell('array'), // ?????? ['Ce','Shi']
    '??????'.spell('array', 'first', 'low'), // ?????? ['c','s']
    '??????'.spell('tone'), // ?????? 'C??Sh??'
    '?????????'.spell('poly'), // ?????? '(Zhang|Chang)(Da|Dai)(Le|Liao)'
    cnchar.spell('?????????', 'poly', 'tone')
]);
log(cnchar.spell('?????????', 'tone'));
log([
    '?????????????????????'.stroke(),
    '?????????????????????'.stroke('array'),
    cnchar.stroke('???????????????????????????', 'array')
]);
log([
    '??????'.stroke('order'),
    '??????'.stroke('order', 'detail'),
    '??????'.stroke('order', 'shape'),
    cnchar.stroke('??????', 'order', 'name'),
    cnchar.stroke('??????', 'order', 'count'),
]);
log([
    cnchar.orderToWord(['???', '???', '???']),
    cnchar.orderToWord(['???', '???', '???'], 'array'),
    cnchar.orderToWord(['???', '???', '???'], 'start'),
    cnchar.orderToWord(['???', '???', '???'], 'start', 'simple')
]);
log([
    cnchar.spellToWord('sh??ng'),
    cnchar.spellToWord('sh??ng', 'alltone'),
    cnchar.spellToWord('shang4', 'alltone'),
    cnchar.spellToWord('shang4', 'alltone', 'trad'),
    cnchar.spellToWord('lv2', 'simple')
]);
log([
    cnchar.strokeToWord(25),
    cnchar.strokeToWord(25, 'simple'),
    cnchar.strokeToWord(2, 'array')
]);
log([
    cnchar.convert.simpleToTrad('?????????'),
    '?????????'.convertSimpleToSpark(),
    '?????????'.convertTradToSimple()
]);
 */