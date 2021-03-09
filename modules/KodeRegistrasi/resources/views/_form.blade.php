{!! form()->text('kode')->label('Kode') !!}
{!! form()->action([
    form()->submit('Simpan'),
    form()->link('Batal', route('modules::kode-registrasi.index'))
]) !!}

<form action="">
    <label>
        <input name="test" type="text" value="{{ old('value') }}">
    </label>
</form>
