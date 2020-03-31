import {THEME, LANG} from '../components/js/editor';
import {read, write, TYPE} from '../../notebook';
import event from './event';
import {EVENT} from './constant';

function generateStatus ({
    def,
    name,
    emit
}) {
    return {
        _value: null,
        get () {
            if (this._value === null) {
                let v = read(name);
                this._value = v === null ? def : v;
            }
            return this._value;
        },
        set (value, save = true, emitThis = true) {
            this.stash(value);
            if (save) {
                this.save();
            }
            this.emit(emitThis);
        },
        emit (emitThis = true) {
            if (emit && emitThis)
                event.emit(emit, this._value);
        },
        stash (value, emitThis = true) {
            this._value = value;
            this.emit(emitThis);
        },
        save () {
            write(name, this._value);
        },
        init () {
            this.set(this.get());
        }
    };
}

export const theme = generateStatus({
    def: THEME.LIGHT,
    name: TYPE.THEME,
    emit: EVENT.THEME_CHANGE
});

export const dragPercent = generateStatus({
    def: 50,
    name: TYPE.DRAG_PERCENT,
    emit: EVENT.DRAG_PERCENT
});

export const dragStatus = generateStatus({
    def: false,
    name: TYPE.DRAG_STATUS,
    emit: EVENT.DRAG_STATUS
});

export const code = generateStatus({
    def: '',
    name: TYPE.CODE,
    emit: EVENT.CODE_CHANGE
});

export const language = generateStatus({
    def: LANG.JAVASCRIPT,
    name: TYPE.LANGUAGE,
    emit: EVENT.LANG_CHANGE
});
export const htmlLog = generateStatus({
    def: true,
    name: TYPE.HTML_PANEL,
    emit: EVENT.HTML_PANEL_CHANGE
});