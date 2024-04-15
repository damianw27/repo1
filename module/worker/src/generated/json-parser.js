// Generated from ./tmp/JSON.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JSONListener from './json-listener';
const serializedATN = [4,1,14,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,24,8,1,10,1,12,1,
27,9,1,1,1,1,1,1,1,1,1,3,1,33,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,43,
8,3,10,3,12,3,46,9,3,1,3,1,3,1,3,1,3,3,3,52,8,3,1,4,1,4,1,4,1,5,1,5,1,5,
1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
3,7,78,8,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,82,0,16,1,0,0,0,2,32,1,0,0,0,
4,34,1,0,0,0,6,51,1,0,0,0,8,53,1,0,0,0,10,56,1,0,0,0,12,59,1,0,0,0,14,77,
1,0,0,0,16,17,3,14,7,0,17,18,5,0,0,1,18,1,1,0,0,0,19,20,5,1,0,0,20,25,3,
4,2,0,21,22,5,2,0,0,22,24,3,4,2,0,23,21,1,0,0,0,24,27,1,0,0,0,25,23,1,0,
0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,3,0,0,29,33,1,0,0,
0,30,31,5,1,0,0,31,33,5,3,0,0,32,19,1,0,0,0,32,30,1,0,0,0,33,3,1,0,0,0,34,
35,5,11,0,0,35,36,5,4,0,0,36,37,3,14,7,0,37,5,1,0,0,0,38,39,5,5,0,0,39,44,
3,14,7,0,40,41,5,2,0,0,41,43,3,14,7,0,42,40,1,0,0,0,43,46,1,0,0,0,44,42,
1,0,0,0,44,45,1,0,0,0,45,47,1,0,0,0,46,44,1,0,0,0,47,48,5,6,0,0,48,52,1,
0,0,0,49,50,5,5,0,0,50,52,5,6,0,0,51,38,1,0,0,0,51,49,1,0,0,0,52,7,1,0,0,
0,53,54,5,13,0,0,54,55,5,13,0,0,55,9,1,0,0,0,56,57,5,13,0,0,57,58,5,13,0,
0,58,11,1,0,0,0,59,60,5,13,0,0,60,61,5,13,0,0,61,62,5,13,0,0,62,63,5,13,
0,0,63,13,1,0,0,0,64,78,5,11,0,0,65,78,5,12,0,0,66,78,3,2,1,0,67,78,3,6,
3,0,68,78,5,7,0,0,69,78,5,8,0,0,70,78,5,9,0,0,71,72,3,12,6,0,72,73,5,10,
0,0,73,74,3,10,5,0,74,75,5,10,0,0,75,76,3,8,4,0,76,78,1,0,0,0,77,64,1,0,
0,0,77,65,1,0,0,0,77,66,1,0,0,0,77,67,1,0,0,0,77,68,1,0,0,0,77,69,1,0,0,
0,77,70,1,0,0,0,77,71,1,0,0,0,78,15,1,0,0,0,5,25,32,44,51,77];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSONParser extends antlr4.Parser {

    static grammarFileName = "JSON.g4";
    static literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'", 
                            "'true'", "'false'", "'null'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "STRING", "NUMBER", "DIGIT", 
                             "WS" ];
    static ruleNames = [ "json", "obj", "pair", "arr", "day", "month", "year", 
                         "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSONParser.ruleNames;
        this.literalNames = JSONParser.literalNames;
        this.symbolicNames = JSONParser.symbolicNames;
    }



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSONParser.RULE_json);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.value();
	        this.state = 17;
	        this.match(JSONParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	obj() {
	    let localctx = new ObjContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSONParser.RULE_obj);
	    var _la = 0;
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.match(JSONParser.T__0);
	            this.state = 20;
	            this.pair();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 21;
	                this.match(JSONParser.T__1);
	                this.state = 22;
	                this.pair();
	                this.state = 27;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 28;
	            this.match(JSONParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.match(JSONParser.T__0);
	            this.state = 31;
	            this.match(JSONParser.T__2);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSONParser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(JSONParser.STRING);
	        this.state = 35;
	        this.match(JSONParser.T__3);
	        this.state = 36;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arr() {
	    let localctx = new ArrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSONParser.RULE_arr);
	    var _la = 0;
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.match(JSONParser.T__4);
	            this.state = 39;
	            this.value();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 40;
	                this.match(JSONParser.T__1);
	                this.state = 41;
	                this.value();
	                this.state = 46;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 47;
	            this.match(JSONParser.T__5);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(JSONParser.T__4);
	            this.state = 50;
	            this.match(JSONParser.T__5);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	day() {
	    let localctx = new DayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSONParser.RULE_day);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(JSONParser.DIGIT);
	        this.state = 54;
	        this.match(JSONParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	month() {
	    let localctx = new MonthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JSONParser.RULE_month);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(JSONParser.DIGIT);
	        this.state = 57;
	        this.match(JSONParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	year() {
	    let localctx = new YearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JSONParser.RULE_year);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(JSONParser.DIGIT);
	        this.state = 60;
	        this.match(JSONParser.DIGIT);
	        this.state = 61;
	        this.match(JSONParser.DIGIT);
	        this.state = 62;
	        this.match(JSONParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JSONParser.RULE_value);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(JSONParser.STRING);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(JSONParser.NUMBER);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.obj();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 67;
	            this.arr();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 68;
	            this.match(JSONParser.T__6);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 69;
	            this.match(JSONParser.T__7);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 70;
	            this.match(JSONParser.T__8);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 71;
	            this.year();
	            this.state = 72;
	            this.match(JSONParser.T__9);
	            this.state = 73;
	            this.month();
	            this.state = 74;
	            this.match(JSONParser.T__9);
	            this.state = 75;
	            this.day();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JSONParser.EOF = antlr4.Token.EOF;
JSONParser.T__0 = 1;
JSONParser.T__1 = 2;
JSONParser.T__2 = 3;
JSONParser.T__3 = 4;
JSONParser.T__4 = 5;
JSONParser.T__5 = 6;
JSONParser.T__6 = 7;
JSONParser.T__7 = 8;
JSONParser.T__8 = 9;
JSONParser.T__9 = 10;
JSONParser.STRING = 11;
JSONParser.NUMBER = 12;
JSONParser.DIGIT = 13;
JSONParser.WS = 14;

JSONParser.RULE_json = 0;
JSONParser.RULE_obj = 1;
JSONParser.RULE_pair = 2;
JSONParser.RULE_arr = 3;
JSONParser.RULE_day = 4;
JSONParser.RULE_month = 5;
JSONParser.RULE_year = 6;
JSONParser.RULE_value = 7;

class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_json;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	EOF() {
	    return this.getToken(JSONParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterJson(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitJson(this);
		}
	}


}



class ObjContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_obj;
    }

	pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PairContext);
	    } else {
	        return this.getTypedRuleContext(PairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterObj(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitObj(this);
		}
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_pair;
    }

	STRING() {
	    return this.getToken(JSONParser.STRING, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitPair(this);
		}
	}


}



class ArrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_arr;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterArr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitArr(this);
		}
	}


}



class DayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_day;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSONParser.DIGIT);
	    } else {
	        return this.getToken(JSONParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitDay(this);
		}
	}


}



class MonthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_month;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSONParser.DIGIT);
	    } else {
	        return this.getToken(JSONParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterMonth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitMonth(this);
		}
	}


}



class YearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_year;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSONParser.DIGIT);
	    } else {
	        return this.getToken(JSONParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterYear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitYear(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_value;
    }

	STRING() {
	    return this.getToken(JSONParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(JSONParser.NUMBER, 0);
	};

	obj() {
	    return this.getTypedRuleContext(ObjContext,0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	year() {
	    return this.getTypedRuleContext(YearContext,0);
	};

	month() {
	    return this.getTypedRuleContext(MonthContext,0);
	};

	day() {
	    return this.getTypedRuleContext(DayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitValue(this);
		}
	}


}




JSONParser.JsonContext = JsonContext; 
JSONParser.ObjContext = ObjContext; 
JSONParser.PairContext = PairContext; 
JSONParser.ArrContext = ArrContext; 
JSONParser.DayContext = DayContext; 
JSONParser.MonthContext = MonthContext; 
JSONParser.YearContext = YearContext; 
JSONParser.ValueContext = ValueContext; 
