{!! form()->text('kode')->label('Kode') !!}
{!! form()->action([
    form()->submit('Simpan'),
    form()->link('Batal', route('modules::kode-registrasi.index'))
]) !!}
