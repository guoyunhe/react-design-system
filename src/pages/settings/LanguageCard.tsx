import { useAuth } from '@guoyunhe/react-auth';
import { Save as SaveIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Card, CardContent, CardHeader, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { languages } from 'config/i18n';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RequestStatus from 'src/types/enums/RequestStatus';
import User from 'src/types/models/User';
import getFieldError from 'src/utils/getFieldError';

export default function LanguageCard() {
  const { t, i18n } = useTranslation();
  const { user, setUser } = useAuth<User>();
  const [locale, setLocale] = useState(user?.locale || i18n.language);
  const [status, setStatus] = useState(RequestStatus.Idle);
  const [errors, setErrors] = useState<any>(null);

  const localeError = getFieldError(errors, 'locale');

  const submit = () => {
    setStatus(RequestStatus.Progressing);
    axios
      .put('/user', { locale })
      .then((res) => {
        setUser(res.data);
        setStatus(RequestStatus.Succeeded);
      })
      .catch((err) => {
        setStatus(RequestStatus.Failed);
        setErrors(err?.response?.data);
      });
  };

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardHeader title={t('Language')} />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {status === RequestStatus.Succeeded && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {t('Language updated successfully')}
            </Alert>
          )}
          {status === RequestStatus.Failed && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors?.message || t('Failed to update language')}
            </Alert>
          )}
          <TextField
            label={t('Language')}
            select
            name="locale"
            value={locale}
            onChange={(e) => {
              setLocale(e.target.value);
            }}
            error={!!localeError}
            helperText={localeError}
            sx={{ mb: 2 }}
          >
            {languages.map((item) => (
              <MenuItem key={item.code} value={item.code}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <LoadingButton
            variant="outlined"
            loading={status === RequestStatus.Progressing}
            onClick={submit}
            startIcon={<SaveIcon />}
          >
            {t('Save')}
          </LoadingButton>
        </Box>
      </CardContent>
    </Card>
  );
}
